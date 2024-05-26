import ReactEmbedGist from 'react-embed-gist';

export const Card = ({ children } : {children : any}) => {
    return (
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        {children}
      </div>
    );
  }

export const Section = ({ children } : {children : any}) => {
    return (
      <section className="py-8 px-4">
          <Card>{children}</Card>
      </section>
    );
}

export const Title = ({ children, className="text-green-400" } : any) => <div className={`${className} text-xl font-black pb-1`}>{children}</div>;
  
const GistLoader = () => <div className="text-black" >loading code</div>

export const Gist = ({gist, ...props}: any) => <ReactEmbedGist 
  gist={gist}
  titleClass='hidden'
  contentClass='bg-gray-800' 
  loadingFallback={<GistLoader />} 
  {...props}
/>

export const Button = ({ children , onClick, ...props }: any) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-500 text-white font-notosans font-black p-5 rounded transition duration-300"
      {...props}
    >
      {children}
    </button>
  );
};

export const FSLoaderIsolated = ({ message }: any) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-25 flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <svg className="animate-spin h-10 w-10 text-white mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 24c6.627 0 12-5.373 12-12h-4a8 8 0 01-8 8v4z"></path>
        </svg>
        <p className="text-white text-lg font-notosans">{message}</p>
      </div>
    </div>
  );
};

export const ImgLazy= ({ src, alt, style } : any) => {
  return (
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className={`object-cover`}
        style={style}
      />
  );
};

export const Emoji = ({ symbol, label, className }: any) => (
  <span className={className} role="img" aria-label={label ? label : ''} aria-hidden={label ? 'false' : 'true'}>
    {symbol}
  </span>
);