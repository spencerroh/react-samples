import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const defaultOption = {
  fetch: async () => { return ''; },
  loading: (props) => {},
  loaded: (props) => {},
  error: (props) => {},
}

function makeLoadablePage(option = defaultOption) {
  const STATE_LOADING = 'LOADING';
  const STATE_LOADED = 'LOADED';
  const STATE_ERROR = 'ERROR';

  const LoadablePage = (props) => {
    const [state, setState] = useState(STATE_LOADING);
    const data = useRef(null);

    useEffect(() => {
      (async () => {
        try {
          data.current = await option.fetch();
          setState(STATE_LOADED);
        } catch (e) {
          setState(STATE_ERROR);
          data.current = e;
        }
      })();
    }, []);

    switch (state) {
      case STATE_LOADING:
        return <>
          { option.loading({ ...props, $state: state }) }
        </>
      case STATE_LOADED:
        return <>
          { option.loaded({ ...props, $state: state, $data: data }) }
        </>;
      case STATE_ERROR: 
        return <>
          { option.error({ ...props, $state: state, $error: data }) }
        </>
      default:
        return null;
    } 
  }

  return LoadablePage;
}

export default makeLoadablePage;