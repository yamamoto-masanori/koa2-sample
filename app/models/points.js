class PointModel {
    async findByOpenrecUserId(ctx, openrec_user_id) {
        const res = await ctx.mysqlQuery('t_point').get({'openrec_user_id': openrec_user_id});
        return res;
    }
}
export default new PointModel();
