function SingleProjectOverviewDisplay() {
  return (
    <section className="project-overview">
      <h2>Tổng quan dự án</h2>

      <div className="project-container">
        <div className="image-grid-container">
          <div className="image-grid">
            <img
              src={'https://picsum.photos/200/300'}
              alt="Image 1"
            />
            <img
              src={'https://picsum.photos/200/300'}
              alt="Image 2"
            />
            <img
              className="center-image"
              src={'https://picsum.photos/200/300'}
              alt="Center Image"
            />
            <img
              src={'https://picsum.photos/200/300'}
              alt="Image 3"
            />
            <img
              src={'https://picsum.photos/200/300'}
              alt="Image 4"
            />
          </div>
        </div>

        <div className="text-content">
          <h3>Tên dự án</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Mi eget scelerisque interdum
            cursus leo nibh sit. Diam tellus ornare tortor cursus vestibulum
            facilisis ac. Turpis sed magnis placerat semper mauris in diam. Eget
            aliquet gravida ac nisl vitae quis.
          </p>
          <button
            style={{ backgroundColor: "#4160DF" }}
            className="text-white font-medium px-3 py-2 rounded-full"
          >
            Tìm hiểu thêm
          </button>
        </div>
      </div>
    </section>
  );
}

export default SingleProjectOverviewDisplay;
