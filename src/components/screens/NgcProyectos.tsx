import { NgcContainerComp } from "../containers/NgcContainerComp";

export const NgcProyectos = () => {
  return (
    <>
      <div className="cds--row landing-page__r2">
        <div className="cds--col cds--no-gutter">
          <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
            <div className="bx--row landing-page__tab-content">
              <div className="bx--col-lg-16">
                {/* TODO - MODAL */}

                <NgcContainerComp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
