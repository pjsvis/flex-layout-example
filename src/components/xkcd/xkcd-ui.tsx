import * as React from 'react';
import { useEffect, useState } from 'react';
import { XkcdView } from './xkcd-view';
import { getXkcdJson } from './xkcd-service';
import to from 'await-to-js';

interface Props {}

const xkcdMock = {
  month: '7',
  num: 614,
  link: '',
  year: '2009',
  news: '',
  safe_title: 'Woodpecker',
  transcript:
    "[[A man with a beret and a woman are standing on a boardwalk, leaning on a handrail.]]\nMan: A woodpecker!\n<<Pop pop pop>>\nWoman: Yup.\n\n[[The woodpecker is banging its head against a tree.]]\nWoman: He hatched about this time last year.\n<<Pop pop pop pop>>\n\n[[The woman walks away.  The man is still standing at the handrail.]]\n\nMan: ... woodpecker?\nMan: It's your birthday!\n\nMan: Did you know?\n\nMan: Did... did nobody tell you?\n\n[[The man stands, looking.]]\n\n[[The man walks away.]]\n\n[[There is a tree.]]\n\n[[The man approaches the tree with a present in a box, tied up with ribbon.]]\n\n[[The man sets the present down at the base of the tree and looks up.]]\n\n[[The man walks away.]]\n\n[[The present is sitting at the bottom of the tree.]]\n\n[[The woodpecker looks down at the present.]]\n\n[[The woodpecker sits on the present.]]\n\n[[The woodpecker pulls on the ribbon tying the present closed.]]\n\n((full width panel))\n[[The woodpecker is flying, with an electric drill dangling from its feet, held by the cord.]]\n\n{{Title text: If you don't have an extension cord I can get that too.  Because we're friends!  Right?}}",
  alt:
    "If you don't have an extension cord I can get that too.  Because we're friends!  Right?",
  img: 'https://imgs.xkcd.com/comics/woodpecker.png',
  title: 'Woodpecker',
  day: '24'
};

export const XkcdUi = (props: Props) => {
  const [id, setId] = useState(0);
  const [xkcd, setXkcd] = useState(xkcdMock);

  const handleChange = (ev: any) => {
    const val = ev.target.value;
    setId(val)
    getXkcd(val)
  };

  const getXkcd = async (id: number) => {
    const [err, res] = await to(getXkcdJson(id));
    if (err) { return;}
    const data = res && res.data;
    setXkcd(data)
  };

  useEffect(() => { 
    getXkcd(id)
  }, [id])

  return (
    <div>
      <input type="number" onChange={handleChange} />
      <div className="mt2">
        <XkcdView xkcd={xkcd} />
      </div>
    </div>
  );
};
