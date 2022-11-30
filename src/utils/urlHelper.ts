const urlHelper = {
  t: (url: string, useMock?: boolean) => {
    const isMock = useMock || false;
    // const isRemoteServer: boolean = url.includes('http');
    // const apiServerUrl = process.env.API_SERVER_URL || window.location.origin;
    const localDev =
      window.location.href.indexOf('//localhost') > -1 ||
      window.location.href.indexOf('//192') > -1 ||
      window.location.href.indexOf('//172') > -1 ||
      window.location.href.indexOf('//10') > -1 ||
      window.location.href.indexOf('//0') > -1;

    // console.log('localDev', localDev);
    // console.log('apiServerUrl', apiServerUrl);

    if (isMock && localDev) {
      console.log(`${url}: %cLocal Debug + Json Data`, 'color:blue;font-size:1em;');
      return '../mock_data/' + url.split('?')[0].split('/').join('_') + '.json';
    } else if (!localDev) {
      console.log(`${url}: %cLocal Debug + Remote Server`, 'color:green;font-size:1em;');
      return url;
    } else {
      return url;
    }
  },
};

export default urlHelper;
