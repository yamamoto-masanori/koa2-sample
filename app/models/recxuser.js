class RecxuserModel {
    async findByUuid(ctx, uuid) {
        const res = await ctx.mysqlQuery('t_recxuser').get({'terminal_id': uuid});
        return res;
    }
}
export default new RecxuserModel();
