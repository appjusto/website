export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const pageview = () => {
  // @ts-ignore
  window.fbq("track", "PageView");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
  // @ts-ignore
  window.fbq("track", name, options);
};

export const grantConsent = () => {
  // @ts-ignore
  window.fbq("consent", "grant");
};
