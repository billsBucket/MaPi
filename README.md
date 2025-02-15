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
   npm install
   ```

3. Set up Supabase:
   - Create a Supabase project at [Supabase](https://supabase.io/).
   - Get your Supabase URL and public anon key and update `supabaseClient.ts` file.

4. Set up Solana:
   - Ensure you have a Solana wallet (e.g., Phantom, Sollet).

### Running the App

1. Start the Expo server:
   ```bash
   npm start
   ```

2. Open the app on an emulator or a physical device using the Expo Go app.

## Folder Structure

```
MaPi/
├── assets/
├── node_modules/
├── .gitignore
├── App.tsx
├── auth.ts
├── supabaseClient.ts
├── SolanaWallet.tsx
├── tsconfig.json
├── package.json
└── README.md
```

## Features

- Real-time location tracking
- Google Maps integration
- User authentication with Supabase
- Solana wallet connection

## License

This project is licensed under the MIT License.