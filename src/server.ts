import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

let server: ReturnType<typeof createServer> | null = null;

async function main() {
  try {
    // Database connection
    await mongoose.connect(config.database_url as string);
    console.log('✅ Connected to MongoDB');

    // Create HTTP server and initialize Socket.IO
    const httpServer = createServer(app);
    const io = new SocketIOServer(httpServer);

    // Socket.IO event handling
    io.on('connection', (socket) => {
      console.log('A user connected');

      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });

    // Start server
    server = httpServer.listen(config.port, () => {
      console.log(`🚀 App is listening on port ${config.port}`);
    });
  } catch (err) {
    console.error('❌ Failed to initialize application:', err);
    process.exit(1);
  }
}

// Run the main function
main();

// Handle unhandled rejections
process.on('unhandledRejection', (err) => {
  console.error('😈 Unhandled Rejection detected, shutting down...', err);
  if (server) {
    server.close(() => {
      console.log('Server closed due to unhandled rejection');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('😈 Uncaught Exception detected, shutting down...', err);
  process.exit(1);
});
