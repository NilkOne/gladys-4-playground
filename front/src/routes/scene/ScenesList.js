import { connect } from 'unistore/preact';
import actions from '../../actions/scenes';
import style from './style.css';

const SceneList = connect('scenes,currentUrl,totalSize', actions)(
  ({ scenes, currentUrl, totalSize, search, play, edit, remove }) => {

    const removeScene = (scene) => () => remove(scene);
    const editScene = (scene) => () => edit(scene);
 
    return (
      <div class="container">
        <div class="page-header">
          <h1 class="page-title">
                Scenes
          </h1>
          <div class="page-subtitle">1 - {scenes.length} of {totalSize} of  Scenes</div>
          <div class="page-options d-flex">
            <select class="form-control custom-select w-auto">
              <option value="asc">A - Z</option>
              <option value="desc">Z - A</option>
            </select>
            <div class="input-icon ml-2">
              <span class="input-icon-addon">
                <i class="fe fe-search" />
              </span>
              <input type="text" class="form-control w-10" placeholder="Search Scenes" onInput={search} />
            </div>
            <div class="ml-2">
              <a href="#" class="btn btn-secondary"><i class="fe fe-plus" />New Scene</a>
            </div>
          </div>
        </div>
        <div class="row row-cards">
          { scenes.map((scene) => (

            <div class="col-sm-6 col-lg-3">
              <div class="card h-100">
                <div class="card-body p-3 text-center">
                  <div class="text-right text-green">
                    <a href="#" class="icon" data-toggle="card-remove" onClick={removeScene(scene)}><i class="fe fe-trash" /></a>
                  </div>
                  <div class={style.scene_icon}><i class={`fe fe-${scene.icon}`} /></div>
                  <h4>{scene.name}</h4>
                  <div class="text-muted">{scene.description}</div>
                </div>
                <div class="card-footer">
                  <div class="btn-list text-center">
                    <button class="btn btn-outline-primary btn-sm" onClick={editScene(scene)} id={scene.selector}><i class="fe fe-edit" />Edit</button>
                    <button type="button" class="btn btn-outline-success btn-sm" onClick={play} id={scene.selector}><i class="fe fe-play" />Play</button>
                  </div>
                </div>
              </div>
            </div>
                
          ))}
        </div>
      </div>
    );
  });

export default SceneList;