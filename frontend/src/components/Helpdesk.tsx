import { Box } from "@chakra-ui/layout"
import React from 'react';

const Helpdesk: React.FC = () => {

  const initWidget = React.useCallback(() => {
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
    }
  },[]);

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.freshworks.com/widgets/67000002819.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }, []);

  React.useEffect(() => {
    initWidget();
  }, [initWidget]);

  return <Box />
}

export default Helpdesk;
