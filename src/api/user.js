import request from '@/utils/request'
export function indexAdvs(params) {
    return request({
        url: '/api/index/indexAdvs',
        params
    })
}