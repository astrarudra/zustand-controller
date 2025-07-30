import { ConnectedComponent, ConnectedControllerCard, ControllerTriggerButton } from "../appComponents/DemoElements";
import { Card, Title } from "./UIElements";
import { useState } from "react";


const AboutZustandCard = () => {
  const [isRoastMode, setIsRoastMode] = useState(false);

  const professionalContent = (
    <div className="cool-text">
      <Title>Streamline Your Flow with Zustand-Controller</Title>
      <p>
        <b>Experience</b> the power of modern state management with <b>Zustand</b>. <br/>
        <b>Built</b> for developers who value <b>simplicity and performance</b>. <br/>
        <b>Enhance</b> your application's state management with our controller pattern. <br/>
        <b>Designed</b> to be the most efficient <b>State Management</b> solution.
      </p>
      <br/>
      <Title>Simplified Architecture</Title>
      <p>
        <b>Eliminate</b> the complexity of traditional Redux <b>boilerplate</b>. <br/>
        <b>Zustand</b> offers a clean, intuitive approach to <b>state management</b>. <br/>
        <b>Reduce</b> development time with minimal configuration required. <br/>
        <b>Focus</b> on building features instead of managing <b>infrastructure</b>.
      </p>
      <br/>
      <Title>High Performance & Lightweight</Title>
      <p>
        <b>Zustand</b> delivers exceptional performance with minimal overhead. <br/>
        <b>Optimized</b> for modern React applications and TypeScript support. <br/>
        <b>Enjoy</b> fast rendering and efficient state updates for your applications.
      </p>
      <br/>
      <Title>Enhanced Control with Controller Pattern</Title>
      <p>
        <b>Gain</b> precise control over your application's state flow. <br/> 
        <b>Implement</b> complex business logic with ease and clarity. <br/>
        <b>Track</b> and manage state changes with complete transparency. <br/>
        <b>Achieve</b> maintainable and scalable state architecture.
      </p>
      <br/>
      <Title>Ready to Get Started?</Title>
      <p>
        <b>Transform</b> your state management approach with Zustand-Controller. <br/>
        <b>Join</b> thousands of developers who have already made the switch. <br/>
        <b>Experience</b> the future of <b>state management</b> in React applications. <br/>
        <b>Start</b> building better applications today.
      </p>
    </div>
  );

  const roastContent = (
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
  );

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-black">
          {isRoastMode ? "Zustand - The New Bad Boy" : "Zustand - Store Strategist"}
        </h2>
        <button
          onClick={() => setIsRoastMode(!isRoastMode)}
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-sm"
        >
          {isRoastMode ? "🎩 Prof." : "🔥 Roast Mode"}
        </button>
      </div>
      {isRoastMode ? roastContent : professionalContent}
    </Card>
  );
};

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