import { config } from '@/config';
import { CSSProperties } from '@/types';
import { createElement, setStyleByElement } from '@/utils';
import { mergeDeep } from 'tianjie';
enum Status {
  Display = 1,
  Hidden = 0
}
export enum SystemStete {
  info = 'info',
  error = 'error'
}

/**
 * 状态条
 */
export class StatusBar {
  element: HTMLElement;
  transitionTime = 800;
  status: Status = Status.Hidden;
  stateColor = {
    info: '#58b0fc',
    error: '#F08080'
  };

  private style: CSSProperties = {};
  constructor(wrapperElement: HTMLElement) {
    this.element = createElement({ id: config.statusBarId, tagName: 'div', innerText: 'hello' });
    wrapperElement.append(this.element);
    this.initStyle();
  }

  initStyle() {
    this.setStyle({
      minWidth: '20px',
      minHeight: '50px',
      position: 'fixed',
      transform: 'translateX(-110%)',
      left: '0',
      bottom: '80px',
      padding: '7px 5px',
      zIndex: '9998',
      backgroundColor: '#58b0fc',
      borderStyle: 'solid',
      borderColor: '#fff',
      fontWeight: 'bold',
      borderRadius: '0 5px 5px 0',
      borderWidth: '2px 2px 2px 0',
      boxShadow: '0 0 5px #999',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      flexWrap: 'wrap',
      fontSize: '14px',
      writingMode: 'vertical-lr'
    });
  }

  setStyle(style: CSSProperties) {
    this.style = mergeDeep(this.style, style);
    setStyleByElement(style, this.element);
  }

  private slideIn(): Promise<Status> {
    return new Promise((resolve) => {
      this.status = Status.Display;
      this.setStyle({
        animationName: 'oml2d-status-bar-slide-in',
        animationDuration: `${this.transitionTime}ms`,
        animationFillMode: 'forwards'
      });
      setTimeout(() => {
        resolve(this.status);
      }, this.transitionTime);
    });
  }

  private slideOut(): Promise<Status> {
    return new Promise((resolve) => {
      this.status = Status.Hidden;
      this.setStyle({
        animationName: 'oml2d-status-bar-slide-out',
        animationDuration: `${this.transitionTime}ms`,
        animationFillMode: 'forwards'
      });
      setTimeout(() => {
        // this.setStyle({ backgroundColor: this.stateColor.info });
        resolve(this.status);
      }, this.transitionTime);
    });
  }

  showLoading() {
    this.setContent(
      `
      <div style="margin-bottom:3px;">加载中</div>
      <svg class="oml2d-icon oml2d-loading" aria-hidden="true">
        <use xlink:href="#icon-loading"></use>
      </svg>
    `
    );
    this.slideIn();
  }

  hideLoading() {
    this.popup('加载成功');
  }

  /**
   * 专门处理加载失败, 需要传入一个重新加载的方法
   * @param reloadFn
   */
  loadingError(reloadFn: () => any) {
    this.popup('加载失败', SystemStete.error, false);

    // this.setStyle({})
    // 添加 mouseover 事件监听器
    const mouseover = () => {
      this.popup('重新加载', SystemStete.info, false);
    };
    const mouseout = () => {
      this.popup('加载失败', SystemStete.error, false);
    };

    const handleClick = () => {
      reloadFn();
      this.element.removeEventListener('mouseout', mouseout);
      this.element.removeEventListener('mouseover', mouseover);
      this.element.removeEventListener('click', handleClick);
    };

    this.element.addEventListener('click', handleClick);
    this.element.addEventListener('mouseover', mouseover);
    this.element.addEventListener('mouseout', mouseout);
  }

  /**
   * 状态条弹出, 自动收起, delay为false时不收起
   * @param message
   * @param state
   * @param delay
   */
  popup(message: string, state: SystemStete = SystemStete.info, delay: number | false = 1000) {
    this.setContent(message);
    this.setStyle({ backgroundColor: this.stateColor[state] });
    this.slideIn().then(() => {
      if (delay) {
        setTimeout(() => {
          this.slideOut();
        }, delay);
      }
    });
  }

  setContent(content: string) {
    this.element.innerHTML = content;
  }
}
