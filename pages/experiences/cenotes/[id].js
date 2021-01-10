import React from 'react';
import { useRouter } from 'next/router';

const Cenote = ({ name }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h2>{`Cenote: ${id}, name: ${name}`}</h2>
    </div>
  );
};

export async function getServerSideProps() {
  const cenoteName = 'Scooby-Doo';

  return {
    props: {
      name: cenoteName,
    },
  };
}

export default Cenote;