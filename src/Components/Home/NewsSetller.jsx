const NewsSetller = () => {
  return (
    <div className="hero bg-base-200 w-11/12 mx-auto min-h-[600px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Stay Updated!</h1>
          <p className="py-6">
            Get weekly updates about new releases, trending games, exclusive
            deals, and upcoming events directly in your inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.target.reset();
            }}
          >
            <fieldset className="fieldset flex items-center">
              <input
                type="email"
                className="input min-h-[50px]"
                placeholder="Email"
              />
              <button className="btn btn-primary">Subscribe Now</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsSetller;
