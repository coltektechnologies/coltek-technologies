// The initial-load screen. Layout renders this for the first two seconds of
// every visit, so it sits squarely on the critical path.
//
// It used to load assets/loading/loading.jpg: a 4000x4000 JPEG (705KB) that
// was 74% blank white margin, displayed at 112px with `object-cover` inside a
// circle — which cropped most of the wordmark away. It now reuses the shared
// transparent logo already served for the navbar and footer (21KB), shown
// whole rather than cropped.
import images from "../../assets/images/images";

const Loader = () => {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d2036]"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative flex h-44 w-44 items-center justify-center">
          {/* Electric pulsing ring */}
          <div
            className="absolute inset-0 animate-ping rounded-full border-4 border-cyan-400 opacity-75"
            aria-hidden="true"
          />

          {/* Solid base ring */}
          <div
            className="absolute inset-0 rounded-full border-4 border-cyan-500"
            aria-hidden="true"
          />

          {/* object-contain so the full wordmark is visible, not centre-cropped */}
          <img
            src={images.logo}
            alt=""
            aria-hidden="true"
            className="z-10 w-28 object-contain"
            width={1164}
            height={370}
          />
        </div>

        <p className="text-2xl font-bold tracking-widest text-cyan-300">
          COLTEK
        </p>

        <span className="sr-only">Loading COLTEK Technologies</span>
      </div>
    </div>
  );
};

export default Loader;
