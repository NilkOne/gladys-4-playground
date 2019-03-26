import { connect } from 'unistore/preact';
import actions from '../../actions/scenes';
import style from './style.css';

const SceneEdit = connect('scenes,sceneEditing,currentUrl,totalSize', actions)(
  ({ scenes, sceneEditing, currentUrl, totalSize, search, play, edit, remove }) => {

    const removeScene = (scene) => () => remove(scene);
    const editScene = (scene) => () => edit(scene);
 
    return (<div class="page">
      <div class="page-main">
        <div class="my-3 my-md-5">
          <div class="container">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Scene editor</h3>
                <div class="card-options">
                  <div class="input-group">
                    <label class="form-label ml-5 mr-2 my-xl-auto">Name</label>
                    <input type="text" class="form-control" value={sceneEditing.name} />
                  </div>
                  <div class="input-group">
                    <label class="form-label ml-5 mr-2 my-xl-auto">Description</label>
                    <input type="text" class="form-control" value={sceneEditing.description} />
                  </div>
                  <div class="input-group">
                    <label class="form-label ml-5 mr-2 my-xl-auto">Selectors</label>
                    <input type="text" class="form-control"  value={sceneEditing.selector} />
                  </div>
                  <button class="btn btn-primary ml-5 mr-3 w-50">Play</button>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-3">
                  <p class="text-center mb-6"><span class={style.title_underline}>main actions</span></p>
                    { sceneEditing.actions.map((scene) => (
                      <div class="card p-3">
                        <div class="d-flex align-items-center">
                          <span class="stamp stamp-md bg-green mr-3">
                            <i class="fe fe-shopping-cart"></i>
                          </span>
                          <div>
                            <h4 class="m-0"><a href="javascript:void(0)">78 <small>Orders</small></a></h4>
                            <small class="text-muted">32 shipped</small>
                          </div>
                        </div>
                      </div>
    
                    ))}
                  </div>
                  <div class="col-lg-9"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  });

export default SceneEdit;