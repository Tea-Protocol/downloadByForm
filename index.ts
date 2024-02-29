
export interface downloadByFormProps {
  /** 请求参数 */
  params?: {
    [key: string]: any;
  };
  target?: '_blank' | '_parent' | '_self' | '_top';
  /** 接口 url 地址 */
  action: string;
  method?: 'GET' | 'POST';
}

/**
 * 通过创建 form 表单下载内容
 */
const downloadByForm = ({ params, target = '_blank', action, method = 'POST' }: downloadByFormProps) => {
  if (!action) {
    return null
  }
  const form = document.createElement('form')
  form.id = 'form'
  form.name = 'form'
  document.body.appendChild(form)
  if (params && typeof params === 'object') {
    for (const propName in params) {
      if (params.hasOwnProperty(propName)) {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = propName
        input.value = params[propName]
        form.appendChild(input)
      }
    }
  }

  form.method = method
  form.action = action
  form.target = target
  form.submit()
  document.body.removeChild(form)
}

export default downloadByForm
