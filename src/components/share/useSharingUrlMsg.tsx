import {useState, useEffect } from 'react';

const useSharingUrlMsg = () => {
  const [mainUrl, setMainUrl] = useState("")
  const [sharingMsg, setSharingMsg] = useState("")
  useEffect(() => {
    let url = "https://appjusto-ladingpage.vercel.app/"
    if(process.env.NODE_ENV === "production") {
      const newUrl = window.location.href
      const main = newUrl.split("//")[1].split("/")[0]
      url = `https://${main}`
    }
    const message = encodeURIComponent("AppJusto. Mais do que um app de entregas. Somo um movimento por relações mais justas e transparentes. Faça parte agora!")
    setMainUrl(url)
    setSharingMsg(message)
  }, [])
  return { mainUrl, sharingMsg }
}

export default useSharingUrlMsg;