// https://og-playground.vercel.app/?share=pVVhb9owEP0rlqWKVkqJw0rbReukrau6immVBhJfkJCJTXBxbMtxgAzx33dOmkGBrlKHROK8u7w7v7tz1jjRjOMYf2JiMVII5a6U_Ga99muEZlykMxejVkTISSuowaVgbraHMZEbSUtAp5KvGtTxlfsiRaoAT7hy3DYW6tEHx7P8wPRU5E5My1sNoPKxX5o9_zdheeKErni1LDK1ax1aasCg9BIWjWFCk3lqdaHYrZbagt2mE3ra6XaD5o_aH88O3R8ymnLvTpmg8jz1d0joNBE2kRxRhzpds6ouATKFNQB2TgLkLFW5oRZ8ETk5C9DrBFeewF8CBLLMHLiUxzgOk-uL3z43qAQwVNfaZ7MZqc9-0ZR1v7CvVeyflXmzNj4sQlVgCC2ytHkvt8nNCM-cM3kchpbn7UTqgglFbdlOdBZqYTXTcqpD4fUOCyM1ZeEiurzqkqhzEXXCH4_3j-PeuPfQH9z9HM9LUhrXzhfpCDdR6m69WUfXpErE_xaCL7_qFUQniIDI6LK7fWEqpATLRIKgW7RRCmXUpsL3WMfLewEFaj1vEaGwljcEfd8p9BRErOt3SV6Aw2borgjZc_fUYJhoybYWmICqoattbOEm-y25FIp_fyaP_qJhiJYz4Xjf0MSTG8vPdycHmIQaHpn5etrurV7u0u21yAjXLTLCxzrsiFVyB4BPRqgUIp6TNrmOeNY60mK_NEM9kUOg3WL8bzk-bBVrpK3nel_bgYZz5i1536fRngrRkc3DwMyrvfsBQrsCNHccYG38MZnjeI2rYxvH14QEuJ4UHF_4B8YnRYpjZwseYJ7pJzEojf8muGX1BDRenLtswlntttn8AQ

import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge'
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'rodkisten.com'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            backgroundColor: 'rgba(255,255,255, .9)',
            backgroundImage:
              'radial-gradient(circle at 25px 25px, purple 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
            backgroundSize: '100px 100px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src='https://res.cloudinary.com/oirodolfo/image/upload/v1675012412/LOGO_K_KISTEN_ky0ypt.svg'
              height={180}
              style={{ margin: '20px 45px' }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 60,
              fontWeight: '700',
              fontStyle: 'bold',
              color: 'black',
              margin: 0,
              lineHeight: 1,
              // whiteSpace: 'pre-wrap',
              minWidth: '100%',
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
              letterSpacing: '-0.081em'
            }}
          >
            Rod Kisten
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 30,
              color: 'purple',
              marginTop: 0,
              lineHeight: 1,
              flexGrow: 1,
              justifyContent: 'center',
              letterSpacing: 1
            }}
          >
            {title}
          </div>
        </div>
      ),

      {
        width: 800,
        height: 400
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response('Failed to generate the image', {
      status: 500
    })
  }
}
