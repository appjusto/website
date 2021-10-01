import React from 'react';
import { useRouter } from 'next/router';

const disabedPaths = ['/f/[id]', '/r/[...slug]'];

export const useFreshDesk = () => {
  // context
  const { pathname } = useRouter();
  // handlers
  const initWidget = React.useCallback(() => {
    try {
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
    } catch (error) {
      console.error(error);
    }
  }, []);
  // side effects
  React.useEffect(() => {
    if (disabedPaths.includes(pathname)) return;
    const script = document.createElement('script');
    script.src = 'https://widget.freshworks.com/widgets/67000002819.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }, [pathname])
  React.useEffect(() => {
    if (disabedPaths.includes(pathname)) return;
    initWidget();
  }, [pathname, initWidget]);
  return;
};
