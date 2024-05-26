import { ConnectedComponent, ConnectedControllerCard, ControllerTriggerButton } from "../appComponents/DemoElements";
import { Card, Title } from "./UIElements";


const AboutZustandCard = () => (
    <Card>
    <h2 className="text-3xl font-black mb-4">Zustand - The New Bad Boy</h2>
    <div className="cool-text">
        <Title>Take Control of Your Flow with Zustand-Controller!</Title>
      <p>
        <b>Yo</b>, tired of wrestling with <b>Redux Sagas</b>, man? <br/>
        <b>Ain't</b> nobody got time for that crap in <b>2024!</b> <br/>
        <b>Say</b> peace out to the Redux headaches and take this bad boy for a spin. <br/>
        <b>It's</b> simply the GOD of <b>State Management</b> game.
      </p>
      <br/>
        <Title>No More Redux Drama</Title>
      <p>
        <b>Gone</b> are the days of drowning in Redux <b>Boilerplate</b>. <br/>
        <b>With</b> Zustand, it's all about <b>Simplicity & Speed</b>. <br/>
        <b>Say</b> goodbye to those endless action types and reducers. <br/>
        Bad Boy's <b>minimalistic</b> approach will make you wonder, <br/> 
        <b>Why</b> you ever bothered with Redux in the 1st place.
      </p>
      <br/>
        <Title>Lightweight, Lightning-Fast</Title>
      <p>
        <b>Zustand</b> ain't here to mess around. <br/>
        <b>It's</b> lightweight and lightning-fast, smooth as butter. <br/>
        <b>Say</b> hello to silky-smooth <b>performance</b> that'll have your app feeling fly.
      </p>
      <br/>
        <Title>Customize Your Flow</Title>
      <p>
        With <b>Controller</b>, you're in the driver's seat. <br/> 
        <b>Take charge</b> of your flow, <br/>
        No need to <b>hunt</b> which saga got triggered. <br/>
        It's all about <b>customization & control</b>, baby.
      </p>
      <br/>
        <Title>So, What Are You Waiting For?</Title>
      <p>
        <b>Ready</b> to level up your state management game? <br/>
        <b>Say</b> goodbye to the old and hello to the new with Zustand-Controller. <br/>
        <b>It's</b> time to take <b>control</b> of your flow & leave Redux in the rearview mirror. <br/>
        <b>Let's</b> do this!
      </p>
    </div>
  </Card>
)

const ControllerDriver = () => {
    return <div className="mt-4">
      <Card>
        <div className="flex">
          <div className="p-3"><ConnectedComponent /></div>
          <div className="flex-1"></div>
          <ControllerTriggerButton />
        </div>
      </Card>
    </div>
  };

const IntroSection = () => {
    return (
      <section className="py-8">
        <div className="px-4 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-8">
            <AboutZustandCard />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <ConnectedControllerCard />
            <div>
          </div>
          <ControllerDriver />
          </div>
        </div>
      </section>
    );
  }

  export default IntroSection;