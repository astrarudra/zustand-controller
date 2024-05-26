import { Gist, Section, Title } from "./UIElements";

const CodeSection = () => {
    return (
        <Section>
            <h2 className="text-3xl font-black mb-4">Let's Code !!!!!</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Title>1. Setup Store</Title>
                    <Gist gist={'astrarudra/66ce6f5b3569965be622a4b0e8fd1124'}/>
                </div>
                <div>
                    <Title>2. The Slice</Title>
                    <Gist gist={'astrarudra/dc6650ed93e7e8b53dc0b913d023ab8a'}/>
                </div>
                <div>
                    <Title>3. Controller</Title>
                    <Gist gist={'astrarudra/161316f64b59c112e9f1c56d4c97dbbe'}/>
                </div>
                <div>
                    <Title>4. The UI</Title>
                    <Gist gist={'astrarudra/556f199687334a69d43eb5576d6ebd49'}/>
                </div>
            </div>
            <h2 className="text-2xl font-black mb-4 mt-4">That's all the basics!</h2>
            We just did the setup, an entire API flow with and state management - in just 16x4 lines of code. <br />
            Oh wait, its less, they have comments and imports! <br/>
        </Section>
    );
}

/*
https://i.imgur.com/42pT7xj.png
https://i.imgur.com/uieOm1g.png
https://i.imgur.com/CjKWn0g.png
https://i.imgur.com/dP0N3sL.png
https://i.imgur.com/Euhdlyv.png
*/

export default CodeSection;