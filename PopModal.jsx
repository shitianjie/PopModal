import React from 'react';
import './PopModal.scss';

export default class PopModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: false
    }
  }

  fade(btn) {
    if (!btn.needFade)
      return void btn.action();
    this.setState({
      fade: 'true'
    }, () => void setTimeout(btn.action, 100));
  }

  render() {
    const {fade} = this.state;
    const {title, foots, children} = this.props;
    const [leftBtn, rightBtn] = foots;

    return (
      <div className="pop-modal">
        <div className={`${fade && 'fade' || ''} modal`}>
          <section className="context">
            <h1 className="title">{title}</h1>
            {children}
          </section>
          <footer className="modal-foot">
            <button className={`fbtn red ${ !!rightBtn || 'long'}`} onClick={() => this.fade(leftBtn)}>{leftBtn.text}</button>
            {rightBtn && <button className="fbtn orange" onClick={() => this.fade(rightBtn)}>{rightBtn.text}</button>}
          </footer>
        </div>
      </div>
    )
  }
}
