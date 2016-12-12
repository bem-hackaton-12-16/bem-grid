module.exports = {
	tag: 'html',
	content: {
		tag: 'body',
		content: [
			{
				tag: 'link',
				attrs: {
					type: 'text/css',
					rel: 'stylesheet',
					href:'index.css'
				}
			},
			[
				{
					block: 'header',
					content: 'HEADER'
				},
				{
					block: 'row',
					content: [
						{
							elem: 'col',
							content: 'col1'
						},
						{
							elem: 'col',
							content: 'col2'
						},
						{
							elem: 'col',
							content: 'col3'
						},
						{
							elem: 'col',
							content: 'col4'
						},
						{
							elem: 'col',
							content: 'col5'
						},
						{
							elem: 'col',
							content: 'col6'
						}
					]
				}
			]
		]
	}
};
