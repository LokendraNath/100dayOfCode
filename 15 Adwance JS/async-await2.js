function fetchTvChannels() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Feaching Tv Channels Successfull");
    }, 2000);
  });
}

function featchChannelName() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Feaching Channels Name Successfully");
    }, 2000);
  });
}
async function featchTv() {
  try {
    console.log("Featching data Data....");
    const [tvChannel,channelName] = await Promise.all([fetchTvChannels(),featchChannelName()])
    console.log(tvChannel)
    console.log(channelName)
    console.log("featch data Successfull");
  } catch (error) {
    console.error("Error Featch Data", error);
  }
}
featchTv();
