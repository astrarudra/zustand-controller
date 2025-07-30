import { Emoji, Gist, ImgLazy, Section, Title } from "./UIElements";
import { useState } from "react";

const imageBase = 'https://astrarudra.github.io/data/images/'
const archImgs = {
    reduxSaga: `${imageBase}/redux-saga.png`,
    justZustand: `${imageBase}/just-zustand.png`,
    zustandController: `${imageBase}/zustand-controller.png`,
    controllerChained: `${imageBase}/controller-chained.png`,
    controllerServiceLayer: `${imageBase}/service-layer.png`,
}

// Modal component for full-screen image viewing
const ImageModal = ({ src, alt, isOpen, onClose }: any) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div className="relative max-w-full max-h-full">
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
                >
                    ✕ Close
                </button>
                <img 
                    src={src} 
                    alt={alt}
                    className="max-w-full max-h-full object-contain"
                    onClick={(e) => e.stopPropagation()}
                />
                <div className="absolute -bottom-12 left-0 text-white text-sm opacity-75">
                    Click anywhere outside to close
                </div>
            </div>
        </div>
    );
};

// Clickable image component with hover effects
const ClickableImage = ({ src, alt, style, title }: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div 
                className="relative cursor-pointer group transition-all duration-300 hover:scale-105"
                onClick={() => setIsModalOpen(true)}
                title={`Click to view ${title} in full screen`}
            >
                <ImgLazy 
                    src={src} 
                    alt={alt} 
                    style={style}
                    className="transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/25 rounded-lg"
                />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <div className="bg-black bg-opacity-0 group-hover:bg-opacity-70 text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                        🔍 Click to expand
                    </div>
                </div>
            </div>
            <ImageModal 
                src={src}
                alt={alt}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

const ReduxSaga = () => (
    <div className="py-4">
      <Title>
        <Emoji symbol="💀" label="Legacy Skull" className="text-4xl mr-2" /> Legacy Much? - The Redux Saga
      </Title>
      <div className="flex flex-col lg:flex-row items-center lg:items-start my-5">
        <div className="flex-1 lg:pr-5">
          <p className="cool-text">
            <Emoji symbol="📜" label="scroll" className="text-xl mr-2" />
            <b>Old-school</b> state management that's <b>bogged down</b> with complexity.<br />
            <Emoji symbol="😅" label="arrows in a circle" className="text-xl mr-2" />
            <b>Complex middleware</b> and <b>function*</b> - Its f* in short - makes sense.<br />
            <Emoji symbol="😵" label="lightbulb" className="text-xl mr-2" />
            <b>Saga</b> is triggered magically as an effect, so code flow is <b>unclear</b>.<br />
            <Emoji symbol="😖" label="spiral" className="text-xl mr-2" />
            Uses <b>complex</b> generator functions that are hard to follow.<br />
            <Emoji symbol="🔍" label="magnifying glass" className="text-xl mr-2" />
            Difficult to <b>debug</b> and <b>test</b>.<br />
            <Emoji symbol="🧩" label="puzzle piece" className="text-xl mr-2" />
            Steep learning curve for <b>new developers</b>.<br />
            <Emoji symbol="🚀" label="rocket" className="text-xl mr-2" />
            Better alternatives available that are <b>easier</b> and more <b>efficient</b>.
          </p>
        </div>
        <div className="flex-1 flex justify-left items-center lg:pl-5 mt-5 lg:mt-0">
          <ClickableImage 
            src={archImgs.reduxSaga} 
            alt="The Redux Saga Architecture" 
            style={{ maxHeight: '300px', maxWidth: '100%' }}
            title="Redux Saga Architecture"
          />
        </div>
      </div>
    </div>
);

const JustZustand = () => (
    <div className="py-4">
        <Title>
            <Emoji symbol="⚡" label="lightning" className="text-4xl mr-2" /> Just State Management? - Just Zustand
        </Title>
        <div className="flex flex-col lg:flex-row items-center lg:items-start my-5">
            <div className="flex-1 lg:pr-5">
            <p className="cool-text">
                <Emoji symbol="🚀" label="rocket" className="text-xl mr-2" />
                <b>Lightning-fast</b> and <b>simple</b>.<br />
                <Emoji symbol="🌟" label="star" className="text-xl mr-2" />
                <b>Minimalistic</b> approach that just <b>works</b>.<br />
                <Emoji symbol="🔧" label="wrench" className="text-xl mr-2" />
                <b>Easy</b> to set up and <b>customize</b>.<br />
                <Emoji symbol="📈" label="chart" className="text-xl mr-2" />
                <b>Boosts</b> performance and <b>scalability</b>.<br />
            </p>
            </div>
            <div className="flex-1 flex justify-center items-center lg:pl-5 mt-5 lg:mt-0">
            <ClickableImage 
                src={archImgs.justZustand} 
                alt="Just Zustand Architecture" 
                style={{ maxHeight: '130px', maxWidth: '100%' }}
                title="Pure Zustand Architecture"
            />
            </div>
        </div>
    </div>
);

const ZustandController = () => (
    <div className="py-4">
        <Title>
            <Emoji symbol="🚀" label="rocket" className="text-4xl mr-2" /> State Mng. + Workflow - Zustand Controller
        </Title>
        <div className="flex flex-col lg:flex-row items-center lg:items-start my-5">
            <div className="flex-1 lg:pr-5">
                <p className="cool-text">
                    <Emoji symbol="🎯" label="target" className="text-xl mr-2" />
                    Makes your workflow <b>crystal clear</b>.<br />
                    <Emoji symbol="⚙️" label="gear" className="text-xl mr-2" />
                    <b>Effortless</b> integration of APIs, logic and state.<br />
                    <Emoji symbol="🚫" label="briefcase" className="text-xl mr-2" />
                    <b>No Side Effect</b> - take charge of your <b>flow</b>.<br />
                    <Emoji symbol="🙅‍♂️" label="no entry" className="text-xl mr-2" />
                    <b>No</b> additional package installations needed.<br />
                    <Emoji symbol="❌" label="chart increasing" className="text-xl mr-2" />
                    <b>No learning curve</b>, It's just JS - way of doing things.<br />
                    <Emoji symbol="🧩" label="puzzle piece" className="text-xl mr-2" />
                    <b>Modularized</b> code, <b>trigger</b> controller from anywhere in the app.<br />
                    <Emoji symbol="🔍" label="magnifying glass" className="text-xl mr-2" />
                    Easy to <b>debug</b> and <b>test</b>. Test entire workflow!<br />
                    <Emoji symbol="📦" label="magnifying glass" className="text-xl mr-2" />
                    Oxy-Utility available for <b>workflow</b> log and <b>stats</b>.<br />
                    <Emoji symbol="🤷" label="magnifying glass" className="text-xl mr-2" />
                    <b>Unopinionated</b> - make it <b>yours</b>.<br />
                </p>
            </div>
            <div className="flex-1 flex justify-center items-center lg:pl-5 mt-5 lg:mt-0">
                <ClickableImage 
                    src={archImgs.zustandController} 
                    alt="Zustand Controller Architecture" 
                    style={{ maxHeight: '250px', maxWidth: '100%' }}
                    title="Zustand Controller Pattern"
                />
            </div>
        </div>
    </div>
);

const ControllerChained = () => (
    <div className="py-4">
        <Title>
            <Emoji symbol="🧩" label="puzzle piece" className="text-4xl mr-2" /> Complex Workflow? - Controller Chained
        </Title>
        <div className="flex flex-col lg:flex-row items-center lg:items-start my-5">
            <div className="flex-1 lg:pr-5">
                <p className="cool-text">
                    <Emoji symbol="🎯" label="target" className="text-xl mr-2" />
                    <b>Chained controllers</b> for managing <b>complex workflows</b>.<br />
                    <Emoji symbol="🔄" label="arrows in a circle" className="text-xl mr-2" />
                    <b>Seamlessly</b> integrate multiple controllers for intricate processes.<br />
                    <Emoji symbol="🛠️" label="hammer and wrench" className="text-xl mr-2" />
                    <b>Effortlessly</b> handle complex logic with chained controllers.<br />
                    <Emoji symbol="🚀" label="rocket" className="text-xl mr-2" />
                    <b>Boost</b> productivity by breaking down complex tasks into manageable steps.<br />
                    <Emoji symbol="🧠" label="brain" className="text-xl mr-2" />
                    <b>Smarter</b> state management with layered controller architecture.<br />
                    <Emoji symbol="🔄" label="arrows in a circle" className="text-xl mr-2" />
                    <b>Unravel</b> intricate workflows with ease using chained controllers.<br />
                </p>
            </div>
            <div className="flex-1 flex justify-center items-center lg:pl-5 mt-5 lg:mt-0">
                <ClickableImage 
                    src={archImgs.controllerChained} 
                    alt="Controller Chained Architecture" 
                    style={{ maxHeight: '370px', maxWidth: '100%' }}
                    title="Chained Controller Pattern"
                />
            </div>
        </div>
    </div>
);

const ControllerServiceLayer = () => (
    <div className="py-4">
        <Title>
            <Emoji symbol="💡" label="light bulb" className="text-4xl mr-2" /> Too Much Logic? - Controller + Service Layer
        </Title>
        <div className="flex flex-col lg:flex-row items-center lg:items-start my-5">
            <div className="flex-1 lg:pr-5">
                <p className="cool-text">
                    <Emoji symbol="🎯" label="bullseye" className="text-xl mr-2" />
                    <b>Efficient</b> separation of concerns with <b>controller</b> and <b>service layer</b>.<br />
                    <Emoji symbol="🛠️" label="hammer and wrench" className="text-xl mr-2" />
                    <b>Handle</b> complex logic with ease using the service layer.<br />
                    <Emoji symbol="💻" label="laptop" className="text-xl mr-2" />
                    <b>Enhance</b> code readability by encapsulating logic in service functions.<br />
                    <Emoji symbol="📚" label="books" className="text-xl mr-2" />
                    <b>Organize</b> your codebase with clear separation of business logic.<br />
                    <Emoji symbol="🚀" label="rocket" className="text-xl mr-2" />
                    <b>Boost</b> performance with optimized service layer architecture.<br />
                    <Emoji symbol="🔄" label="arrows in a circle" className="text-xl mr-2" />
                    <b>Minimize</b> complexity by offloading logic to dedicated service functions.<br />
                </p>
            </div>
            <div className="flex-1 flex justify-center items-center lg:pl-5 mt-5 lg:mt-0">
                <ClickableImage 
                    src={archImgs.controllerServiceLayer} 
                    alt="Controller + Service Layer Architecture" 
                    style={{ maxHeight: '250px', maxWidth: '100%' }}
                    title="Controller with Service Layer"
                />
            </div>
        </div>
    </div>
);

const ArchitectureSection = () => {
    return (
        <Section>
            <h2 className="text-3xl font-black mb-4">Let's Dive Into Architecture !</h2>
            <div className="">
                <ReduxSaga />
                <JustZustand />
                <ZustandController />
                <ControllerChained />
                <ControllerServiceLayer />
            </div>
            <h2 className="text-2xl font-black mb-4 mt-4">Need more power ? </h2>
            Use withEnchaner - Coming Soon. <br />
            Need Undo Redo ? - Coming Soon. <br/>
        </Section>
    );
}

/*
https://i.imgur.com/dP0N3sL.png // Redux saga
https://i.imgur.com/Euhdlyv.png // Just Zustand
https://i.imgur.com/42pT7xj.png // Zustand Controller
https://i.imgur.com/CjKWn0g.png // Zustand Service Layer
https://i.imgur.com/uieOm1g.png // Zustand Controller Chained
*/

export default ArchitectureSection;