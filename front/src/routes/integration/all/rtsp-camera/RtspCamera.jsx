import { Link } from 'preact-router/match';
import { Text, Localizer } from 'preact-i18n';
import cx from 'classnames';

import RtspCameraBox from './RtspCameraBox';
import EmptyState from './EmptyState';
import { RequestStatus } from '../../../../utils/consts';
import style from './style.css';

const RtspCameraPage = ({ children, ...props }) => (
  <div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">
              <Link href="/dashboard/integration/device" class="btn btn-secondary btn-sm btn-block">
                ◀️️ Back
              </Link>
            </h1>
          </div>

          <div class="row">
            <div class="col-lg-3">
              <div class="card">
                <Link href={`${props.currentUrl}/${props.integration.key}`}>
                  <img class="card-img-top" src={props.integration.img} alt={props.integration.name} />
                </Link>
                <div class="card-body d-flex flex-column">
                  <h4>
                    <Link href="#">{props.integration.name}</Link>
                  </h4>
                  <div class="text-muted">{props.integration.description}</div>
                  <br />
                  <div class="row">
                    <div class="col-6">
                      <button class="btn btn-success btn-block">Restart</button>
                    </div>
                    <div class="col-6">
                      <button class="btn btn-danger btn-block">Stop</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="card">
                <div class="card-header">
                  <h1 class="card-title">
                    <Text id="integration.rtspCamera.title" />
                  </h1>
                  <div class="page-options d-flex">
                    <select onChange={props.changeOrderDir} class="form-control custom-select w-auto">
                      <option value="asc">
                        <Text id="global.orderDirAsc" />
                      </option>
                      <option value="desc">
                        <Text id="global.orderDirDesc" />
                      </option>
                    </select>
                    <div class="input-icon ml-2">
                      <span class="input-icon-addon">
                        <i class="fe fe-search" />
                      </span>
                      <Localizer>
                        <input
                          type="text"
                          class="form-control w-10"
                          placeholder={<Text id="integration.rtspCamera.search" />}
                          onInput={props.debouncedSearch}
                        />
                      </Localizer>
                    </div>
                    <button onClick={props.addCamera} class="btn btn-outline-primary ml-2">
                      <Text id="scene.newButton" /> <i class="fe fe-plus" />
                    </button>
                  </div>
                </div>
                <div class="card-body">
                  <div
                    class={cx('dimmer', {
                      active: props.getRtspCameraStatus === RequestStatus.Getting
                    })}
                  >
                    <div class="loader" />
                    <div class={cx('dimmer-content', style.rtspCameraListBody)}>
                      <div class="row">
                        {props.rtspCameras &&
                          props.rtspCameras.map((camera, index) => (
                            <RtspCameraBox
                              camera={camera}
                              cameraIndex={index}
                              houses={props.houses}
                              updateCameraField={props.updateCameraField}
                              updateCameraUrl={props.updateCameraUrl}
                              testConnection={props.testConnection}
                              saveCamera={props.saveCamera}
                              deleteCamera={props.deleteCamera}
                            />
                          ))}
                        {props.rtspCameras && props.rtspCameras.length === 0 && <EmptyState />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RtspCameraPage;