import classNames from "classnames";

function Skeleton({ times, className }) {
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className
  );
  const innersClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "bg-gray-200"
  );

  const boxes = new Array(times).fill(0).map((_, i) => {
    return (
      <div key={i} className={outerClassNames}>
        <div className={innersClassNames} />
      </div>
    );
  });

  return boxes;
}

export default Skeleton;
