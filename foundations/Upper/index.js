import LogoContainer from "./LogoContainer";
import ModelContainer from "./ModelContainer";

export default function Upper({ plant }) {
  return (
    <>
      <LogoContainer />
      <ModelContainer plant={plant} />
    </>
  );
}
