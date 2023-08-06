import * as React from 'react';
import { Xkcd } from './xkcd-types';

interface Props {
  xkcd: Xkcd;
}

const parseTranscript = (transcript: string) => {
  const arr = transcript.split('[[')
  // console.clear
  // console.log(arr)
  return transcript;
};

export const XkcdView = (props: Props) => {
  const { xkcd: xkcdJson } = props;

  return (
    <div>
      <img className="w-50" src={xkcdJson.img} alt={xkcdJson.alt} />
      <div className="w-50 f7">{parseTranscript(xkcdJson.transcript)}</div>
      <div className="w-50">
        <pre className="f7 word-wrap">{JSON.stringify(xkcdJson, null, 2)}</pre>
      </div>
    </div>
  );
};
