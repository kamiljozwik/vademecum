<table>
	<thead>
		<tr>
			<th>Selektor</th>
			<th>Przykład</th>
			<th>Opis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Pojedynczy znacznik HTML</td>
			<td><code>div</code> &#123; … &#125;</td>
			<td>Wybranie wszystkich tagów <code>&lt;div&gt;</code></td>
		</tr>
		<tr>
			<td>Zagnieżdżony znacznik HTML</td>
			<td><code>div p</code> &#123; … &#125;</td>
			<td>
				Wybranie tagów <code>&lt;p&gt;</code> zagnieżdżonych gdziekolwiek wewnątrz tagu
				<code>&lt;div&gt;</code>
			</td>
		</tr>
		<tr>
			<td>Wielokrotny selektor</td>
			<td><code>div, p</code> &#123; … &#125;</td>
			<td>Wybranie tagów <code>&lt;div&gt;</code> oraz <code>&lt;p&gt;</code></td>
		</tr>
		<tr>
			<td><em>Child combinator</em></td>
			<td><code>div &gt; p</code> &#123; … &#125;</td>
			<td>
				Wybranie tagów <code>&lt;p&gt;</code> będących dziećmi tagu
				<code>&lt;div&gt;</code> (inaczej: wybranie tych tagów <code>&lt;p&gt;</code> których
				rodzicem jest <code>&lt;div&gt;</code>)
			</td>
		</tr>
		<tr>
			<td><em>Adjacent sibling combinator</em></td>
			<td><code>div + p</code> &#123; … &#125;</td>
			<td>
				Wybranie tagów <code>&lt;p&gt;</code>, które są bezpośrednim rodzeństwem tagu
				<code>&lt;div&gt;</code>
			</td>
		</tr>
		<tr>
			<td><em>General sibling combinator</em></td>
			<td><code>div ~ p</code> &#123; .. &#125;</td>
			<td>
				Wybranie tagów <code>&lt;p&gt;</code>, które są rodzeństwem tagu <code>&lt;div&gt;</code>
			</td>
		</tr>
		<tr>
			<td>Selektor identyfikatora</td>
			<td><code>#nawigacja</code> &#123; … &#125;</td>
			<td>Wybranie tagu, który posiada atrybut <code>id</code> o wartości “nawigacja”</td>
		</tr>
		<tr>
			<td>Selektor klasy</td>
			<td><code>.nawigacja-link</code> &#123; … &#125;</td>
			<td>
				Wybranie tagów, które posiadają atrybut <code>class</code> o wartości “nawigacja-link”
			</td>
		</tr>
		<tr>
			<td>Łączenie klas oraz identyfikatorów z tagami</td>
			<td><code>button.red</code> &#123; … &#125;<br /><code>div#intro</code> &#123; … &#125;</td>
			<td>
				Wybranie tagów <code>&lt;button&gt;</code> posiadających atrybut <code>class</code> równy
				“red” oraz wybranie tagu <code>&lt;div&gt;</code> z atrybutem <code>id</code> o wartości “intro”
			</td>
		</tr>
	</tbody>
</table>
