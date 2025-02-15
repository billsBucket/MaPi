# MaPi

A Waze-like mobile map app built using Expo, Google Maps API, Supabase for authentication, and Solana Blockchain for wallet connection.

## Getting Started

### Prerequisites

- Node.js
- Expo CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/MaPi.git
   cd MaPi
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory and add the following content:
     ```
     NEXT_PUBLIC_SOLANA_NETWORK=https://api.devnet.solana.com
     NEXT_PUBLIC_PROGRAM_ID=AsP257M25ZVF5ZLaWuy1fyBU7ZheiSkVs5kU6JGhV7KQ
     NEXT_PUBLIC_ROAD_TOKEN_MINT=7NXdFtVTRGEJwrwKVKqZBQWGZwsVAMbzh6PkK8bkSu8Z
     NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyBXBrUDX9OBAAa9SjTfALgsjjKr5WL7H1A
     SUPABASE_URL=https://ybqyhqhbdwxkwuwesyri.supabase.co
     SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlicXlocWhiZHd4a3d1d2VzeXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNTg2OTYsImV4cCI6MjA1NDczNDY5Nn0.jiNZhlJDfdj5ikY5P4IKw_PH0Q_2Boxq4EVGe92CkfA
     ```

4. Add placeholder images:
   - Place the following images in the `assets` directory:
     - `icon.png`
     - `splash.png`
     - `adaptive-icon.png`
     - `favicon.png`

5. Set up Supabase:
   - Create a Supabase project at [Supabase](https://supabase.io/).
   - Get your Supabase URL and public anon key and update the `.env` file.

6. Set up Solana:
   - Ensure you have a Solana wallet (e.g., Phantom, Sollet).

### Running the App

1. Start the Expo server:
   ```bash
   npx expo start --tunnel
   ```

2. Open the app on an emulator or a physical device using the Expo Go app.

## Folder Structure

```
MaPi/
├── assets/
│   ├── icon.png
│   ├── splash.png
│   ├── adaptive-icon.png
│   └── favicon.png
├── node_modules/
├── .gitignore
├── .env
├── App.tsx
├── auth.ts
├── supabaseClient.ts
├── SolanaWallet.tsx
├── tsconfig.json
├── package.json
├── README.md
└── app.json
```

## Features

- Real-time location tracking
- Google Maps integration
- User authentication with Supabase
- Solana wallet connection

## License

This project is licensed under the MIT License.