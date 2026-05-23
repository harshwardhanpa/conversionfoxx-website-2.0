// /api/gemini.ts
// ✅ This is a Vercel Serverless Function.
// It runs on the SERVER, so your Gemini API key never reaches the browser.
//
// HOW TO USE:
// 1. In Vercel dashboard → Your Project → Settings → Environment Variables
//    Add:  GEMINI_API_KEY = your-actual-key-here
//    (Do NOT prefix it with VITE_ — that would make it public again)
//
// 2. From your React frontend, call this like:
//    const res = await fetch('/api/gemini', {
//      method: 'POST',
//      headers: { 'Content-Type': 'application/json' },
//      body: JSON.stringify({ prompt: 'Your prompt here' })
//    });
//    const data = await res.json();
//    console.log(data.text);

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'prompt is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Gemini API key not configured on server' });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData });
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

    return res.status(200).json({ text });
  } catch (error) {
    console.error('Gemini API error:', error);
    return res.status(500).json({ error: 'Failed to call Gemini API' });
  }
}
