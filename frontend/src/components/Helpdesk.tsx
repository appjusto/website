import { Box } from "@chakra-ui/layout"
import React, { useCallback, useRef, useEffect } from 'react';

const Helpdesk: React.FC = () => {
  // refs
  const initialized = useRef(false);
  // handlers
  const initWidget = useCallback(() => {
    //@ts-ignore
    window.fwSettings={
      'widget_id': 67000002819
      };
    //@ts-ignore
    if("function" != typeof window.FreshworksWidget){
      var n = function() {
        //@ts-ignore
        n.q.push(arguments)
      };
      //@ts-ignore
      n.q = [],
      //@ts-ignore
      window.FreshworksWidget = n
      //@ts-ignore
      window.FreshworksWidget('prefill', 'ticketForm', { subject: 'Landing page' });
      //@ts-ignore
      window.FreshworksWidget('hide', 'ticketForm', ['subject','product_id','']);
    }
    initialized.current = true;
  },[]);

  // side effects
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.freshworks.com/widgets/67000002819.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    initWidget();
  }, [initWidget]);

  /*useEffect(() => {
      let subjectField = document.getElementById('subject');
      if(subjectField) subjectField.parentElement.style.visibility = "hidden";
  }, [])*/
  console.log("render")
  // placeholder UI
  return <Box />
}

export default Helpdesk;
