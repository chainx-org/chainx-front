import React, { useEffect, useState } from 'react';
import { WsProvider } from '@polkadot/rpc-provider';
// import * as definitions from "../interfaces/definitions";
import { ApiPromise } from '@polkadot/api';
import { notification } from 'antd';

const {options} = require('@chainx-v2/api');

interface ApiProps {
  isApiReady: boolean;
  api: ApiPromise | null;
}

export const ApiContext: React.Context<ApiProps> = React.createContext(
  {} as unknown as ApiProps
);

interface Props {
  children: React.ReactNode;
  url?: string;
}

function ApiProvider({children, url}: Props): React.ReactElement<Props> {
  const [isApiReady, setApiReady] = useState(false);
  const [api, setApi] = useState<ApiPromise | null>(null);
  const apiInit = (): void => {
    notification.warn({message: 'Wait ws connecting...'});
    const provider = new WsProvider(url);
    const api = new ApiPromise(options({provider}));
    api.on('error', (err) => {
      notification.error({
        message: `Cannot connect to ws endpoint. `,
      });
    });
    api.on('disconnected', () => setApiReady(false));
    api.on('ready', () => {
      setApiReady(true);
      setApi(api);
      notification.info({message: 'Endpoint connected.'});
      //@ts-ignore
      window.api = api;
    });
  };

  useEffect(() => {
    // apiInit();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        isApiReady,
        api,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default React.memo(ApiProvider);
