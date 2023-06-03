import Head from "next/head";
import { TaskBackgroundContainer } from "styles/common";

import { useRouter } from "next/router";

import Blood from "containers/tasks/Blood";

export default function Page() {
  const router = useRouter();
  const { userName, osc } = router.query;

  return (
    <>
      <Head>
        <title>OSC: Transfuse Blood</title>
        <meta name="description" content="Organic Social Capital" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <TaskBackgroundContainer color={"#FFF0E8"}>
        <Blood userName={userName} osc={parseFloat(osc)} />
      </TaskBackgroundContainer>
    </>
  );
}
