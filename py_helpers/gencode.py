

for i in range(1, 120):
    print(f'export const aartiSangrah{i} = Asset.fromModule(require("../../docs/aarti-sangrah/aarti-sangrah-{i}.pdf"));')