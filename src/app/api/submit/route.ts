import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    
  const { name, email } = await request.json()

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID!,
      range: 'Sheet1!A:B',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email]],
      },
    })

    return NextResponse.json({ message: 'Success! Data saved.' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
