import * as React from 'react';
import { Button } from '../src';

const metadata = { title: 'Buttons/Button' };
export default metadata;

export const Example = () => {
  return (
    <div className="flex flex-col space-y-32">
      <div>
        <h3>Primary</h3>
        {/* @ts-ignore */}
        <Button className="mr-32" variant="action">
          Simple
        </Button>
        <Button className="mr-32" variant="action" href="https://google.com">
          Simple href
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" variant="action" loading>
          Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" variant="action" small>
          Small
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" variant="action" small loading>
          Small Loading
        </Button>
      </div>
      <div>
        <h3>Secondary</h3>
        {/* @ts-ignore */}
        <Button className="mr-32">Simple</Button>
        <Button className="mr-32" href="https://google.com">
          Simple href
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" loading>
          Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" quiet>
          Quiet
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" quiet loading>
          Quiet Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" small>
          Small
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" small loading>
          Small Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" quiet small>
          Quiet Small
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" quiet small loading>
          Quiet Small Loading
        </Button>
      </div>
      <div>
        <h3>Negative</h3>
        {/* @ts-ignore */}
        <Button className="mr-32" variant="warning">
          Primary
        </Button>
        <Button className="mr-32" variant="warning" href="https://google.com">
          Simple href
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" variant="warning" loading>
          Primary Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" variant="warning" small>
          Primary Small
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" variant="warning" small loading>
          Primary Small Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" variant="warning" quiet>
          Quiet
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" variant="warning" quiet loading>
          Quiet Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" variant="warning" quiet small>
          Quiet Small
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" variant="warning" quiet small loading>
          Quiet Small Loading
        </Button>
      </div>
      <div>
        <h3>Utility</h3>
        {/* @ts-ignore */}
        <Button className="mr-32" utility>
          Simple
        </Button>
        <Button className="mr-32" utility href="https://google.com">
          Simple href
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" utility loading>
          Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" utility small>
          Small
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" utility small loading>
          Small Loading
        </Button>
      </div>
      <div>
        <h3>Pill</h3>
        {/* @ts-ignore */}
        <Button className="mr-32" pill>
          Pill
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" pill loading>
          Pill
        </Button>
      </div>
      <div>
        <h3>Link</h3>
        {/* @ts-ignore */}
        <Button className="mr-32" link>
          Simple
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" link small>
          Small
        </Button>
      </div>
      <div>
        <h3>Link (href)</h3>
        {/* @ts-ignore */}
        <Button
          link
          className="mr-32"
          href="https://google.com/"
          target="_blank"
        >
          Simple
        </Button>
      </div>
    </div>
  );
};
