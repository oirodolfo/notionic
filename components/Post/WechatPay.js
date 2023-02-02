import Image from 'next/image'

// export default function WechatPay() {
const WechatPay = () => {
  return (
    <div className='fixed top-1/2 left-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-zinc-100 p-5 shadow-lg dark:bg-zinc-400'>
      <Image
        src='/wechat-pay.png'
        alt='WeChat Pay'
        width={200}
        height={200}
        style={{
          maxWidth: '100%',
          height: 'auto'
        }}
      />
    </div>
  )
}

export default WechatPay
