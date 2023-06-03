import Head from "next/head";
import { TaskBackgroundContainer } from "styles/common";

import { useRouter } from "next/router";

import Dontaion from "containers/tasks/Dontaion";

export default function Page() {
  const router = useRouter();
  const { userName, osc } = router.query;

  return (
    <>
      <Head>
        <title>OSC: Follicle Donation</title>
        <meta name="description" content="Organic Social Capital" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <TaskBackgroundContainer color={"#FFF0E8"}>
        <Dontaion userName={userName} osc={parseFloat(osc)} />
      </TaskBackgroundContainer>
    </>
  );
}
