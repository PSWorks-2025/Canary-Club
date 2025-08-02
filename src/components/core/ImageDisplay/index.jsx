const ImageDisplay = ({
  src,
  placeholder = "https://blog.photobucket.com/hubfs/upload_pics_online.png",
  className = "",
  style = {},
  children,
}) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${src || placeholder})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ImageDisplay;
