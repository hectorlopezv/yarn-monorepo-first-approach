'use strict'
function e(e) {
  return e && 'object' == typeof e && 'default' in e ? e : {default: e}
}
Object.defineProperty(exports, '__esModule', {value: !0})
var t = e(require('react'))
!(function (e, t) {
  void 0 === t && (t = {})
  var a = t.insertAt
  if (e && 'undefined' != typeof document) {
    var r = document.head || document.getElementsByTagName('head')[0],
      s = document.createElement('style')
    ;(s.type = 'text/css'),
      'top' === a && r.firstChild
        ? r.insertBefore(s, r.firstChild)
        : r.appendChild(s),
      s.styleSheet
        ? (s.styleSheet.cssText = e)
        : s.appendChild(document.createTextNode(e))
  }
})(
  '.alert--inlineBold{color:#3686af;font:normal normal 700 14px/16px Roboto;letter-spacing:0}.alert-custom{grid-gap:5px;align-content:center;background-color:#d9edf7;border-color:#bce8f1;color:#3686af!important;display:grid!important;grid-template-columns:57px 286px 17px 32px;grid-template-rows:1fr;justify-content:center;margin:15px auto;padding:3px!important;place-items:center center;width:453.5px}@media screen and (max-width:767px){.alert-custom{grid-template-columns:27px 65px 94px 36px;margin:10px auto 14px -6px;padding:2px 4px 12px!important;width:252px}}.alert-custom>i{font-size:50px;padding:8px}@media screen and (max-width:767px){.alert-custom>i{grid-column:1/span 3;padding:8px 8px 8px 22px}}.alert-custom>i:before{padding:0 10px 0 2px!important}.alert-custom .alert__message{color:#3686af;line-height:1.5em;font:normal normal normal 14px/16px Roboto;letter-spacing:0}@media screen and (max-width:767px){.alert-custom .alert__message{grid-column:2/span 3;grid-row:2/span 1;line-height:14px}}.alert-custom .alert__message>span{display:inline-block}.alert-custom .close{filter:alpha(opacity=100);font-size:34px!important;grid-column:4/span 1;opacity:1;padding:0 10px;text-shadow:none}.alert-custom .close.alert-success{color:#43894e}.alert-custom .close.alert-info{background-color:transparent;color:#3686af}.alert-custom .close.alert-warning{color:#8a6d3b}.alert-custom .close.alert-danger{color:#bb4945}',
  {insertAt: 'top'},
)
class a extends t.default.Component {
  constructor() {
    super(...arguments),
      (this.type = ''),
      (this.icon = ''),
      (this.setTypeClass = e => {
        switch (e) {
          case 'info':
            ;(this.type = 'alert-info'), (this.icon = 'fa-info-circle')
            break
          case 'success':
            ;(this.type = 'alert-success'), (this.icon = 'fa-check-circle')
            break
          case 'warning':
            ;(this.type = 'alert-warning'),
              (this.icon = 'fa-exclamation-circle')
            break
          case 'danger':
            ;(this.type = 'alert-danger'),
              (this.icon = 'fa-exclamation-triangle')
            break
          default:
            ;(this.type = 'alert-info'), (this.icon = 'fa-info-circle')
        }
      })
  }
  componentWillMount() {
    this.setTypeClass(this.props.type)
  }
  render() {
    return t.default.createElement(
      'div',
      {
        className: `alert alert-custom alert-dismissible ${this.props.className}`,
        role: 'alert',
      },
      t.default.createElement('i', {className: `fa ${this.icon}`}),
      t.default.createElement(
        'div',
        {className: 'alert__message'},
        this.props.mensaje,
      ),
      t.default.createElement(
        'a',
        {
          className: `close ${this.type}`,
          'data-bs-dismiss': 'alert',
          'aria-label': 'Close',
          onClick: this.props.handleFlyerClose,
        },
        t.default.createElement('i', {className: 'fa fa-times-circle'}),
      ),
    )
  }
}
;(a.defaultProps = {type: 'alert-info', className: ''}), (exports.Alertf = a)
