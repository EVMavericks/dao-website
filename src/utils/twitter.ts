export const getTweetLink = ({ text = "" }: { text?: string }) => {
  const params = new URLSearchParams({
    hashtags: "22cap",
    original_referer: "http://localhost:3000/",
    ref_src: "twsrc^tfw|twcamp^buttonembed|twterm^share|twgr^",
    text,
    url: "https://evmavericks.github.io/website-draft-RisingPaw/",
  });
  return `https://twitter.com/intent/tweet?${params.toString()}`;
};
