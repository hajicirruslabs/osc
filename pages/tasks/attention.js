import Head from "next/head";
import { TaskBackgroundContainer } from "styles/common";

import { useRouter } from "next/router";

import Attention from "containers/mobile/tasks/Attention";

export default function Page() {
  const router = useRouter();
  const { userName, plant, osc } = router.query;

  return (
    <>
      <Head>
        <title>OSC: Pay Attention</title>
        <meta name="description" content="OSC: Pay Attention" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <TaskBackgroundContainer color={"#FFF0E8"}>
        <Attention userName={userName} plant={plant} osc={parseFloat(osc)} />
      </TaskBackgroundContainer>
    </>
  );
}
