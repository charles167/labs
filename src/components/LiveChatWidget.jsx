
import React, { useEffect, useRef } from 'react';

const LiveChatWidget = () => {
  const widgetLoaded = useRef(false);

  useEffect(() => {
    if (widgetLoaded.current) {
      return;
    }

    const propertyId = '684c08374b5a53190afc6fd6'; 
    const widgetId = '1itkg0726';

    if (!window.Tawk_API) {
      window.Tawk_API = window.Tawk_API || {};

      window.Tawk_API.customStyle = {
        visibility: {
          desktop: {
            xOffset: 32,
            yOffset: 32, 
            position: 'br',
          },
          mobile: {
            xOffset: 20,
            yOffset: 20,
            position: 'br',
          },
        },
      };

      window.Tawk_LoadStart = new Date();
      
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      
      s1.async = true;
      s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      
      s0.parentNode.insertBefore(s1, s0);
      widgetLoaded.current = true;
    }
  }, []);

  return null;
};

export default LiveChatWidget;