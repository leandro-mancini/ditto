import React, { Suspense, lazy } from 'react';

interface Props {
  name: string;
}

function formatComponentName(name: string) {
  return name
    .split(/[-\/]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

export const ExamplePreview = (props: Props) => {
  const { name } = props;
  const componentName = formatComponentName(name);

  const Component = lazy(() =>
    import(`../../compositions/examples/${name}`).then((mod) => ({
      default: mod[componentName],
    }))
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};
