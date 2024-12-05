import React from 'react';

const UTFPRPage = () =>  {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto text-justify">
            <h3 className="text-2xl font-semibold text-[#1F2A44]">UTFPR</h3>
            <h2 className='text-[#1F2A40] text-lg m-4 flex justify-center'>Universidade Tecnológica Federal do Paraná - Câmpus Campo Mourão</h2>
            <img className='mb-4' src="/utf.jpg" alt="" />

            <p>
                A Universidade Tecnológica Federal do Paraná (UTFPR), uma instituição pública vinculada ao governo
                federal, tem sede em Curitiba, capital do Paraná. Originada do antigo Centro Federal de Educação
                Tecnológica do Paraná (CEFET), uma universidade é reconhecida pela excelência acadêmica e sua forte
                atuação nas áreas tecnológicas. Seu lema, "Tecnologia e humanismo" , reflete o compromisso com uma
                formação completa e humanizada.
            </p>
            <p>
                No campus de Campo Mourão, a UTFPR oferece cursos de destaque, como Engenharia Civil, Ciência da
                Computação e o Curso Técnico Integrado em Informática para a Internet. Com duração de quatro anos, o
                curso integra disciplinas do ensino médio com conteúdos técnicos especializados, formando os alunos para
                o mercado de tecnologia da informação. O currículo abrange áreas como programação, desenvolvimento de
                sistemas, banco de dados e redes de computadores.
            </p>
            <p>
                A infraestrutura de qualidade do curso técnico é um dos seus diferenciais, com laboratórios modernos que
                possibilitam atividades práticas que complementam o aprendizado teórico. Os alunos têm acesso a
                professores altamente especializados, com títulos de mestres e doutores, e participam de diversos
                eventos acadêmicos e culturais promovidos pela universidade. Um dos maiores destaques do curso é a
                tradicional Gincana do Técnico , um evento que promove integração, desenvolvimento de habilidades e um
                espírito de competição saudável, com desafios que estimulam criatividade, conhecimento e trabalho em
                equipe.
            </p>
            <p>
                A UTFPR de Campo Mourão se destaca pela qualidade do ensino e pela preparação dos alunos para os
                desafios do mercado de trabalho. Ao concluir o Curso Técnico Integrado em Informática, os alunos não
                estão apenas prontos para ingressar no mercado de trabalho, mas também para obrigações com seus estudos
                em cursos superiores na área, com uma base sólida técnica e prática.
            </p>
            <p>
                Fazer parte do Curso Técnico da UTFPR é uma experiência inesquecível, repleta de aprendizado,
                competição, alegria e até momentos de tensão. Este ambiente é marcado por um forte senso de comunidade,
                onde o apoio mútuo e o calor humano são elementos essenciais. Ao longo dos quatro anos, os alunos vivem
                momentos de carinho, solidariedade e união, e, a cada desafio superado, fortalecem laços de amizade e
                constroem memórias que perduram.
            </p>
            <p>
                Um dos maiores marcos dessa jornada é a Gincana do Técnico , onde diversão, trabalho em equipe e
                criatividade se encontram, criando experiências inesquecíveis.
            </p>
            <br />
            <i>Veja um vídeo da nossa Gincana 2024 e sinta um pouco da energia e emoção que fazem do Técnico da UTFPR uma verdadeira família.</i>
            <video src="./Vídeo_TrabalhoPortuguês.mp4" controls />

            <p className='mt-4'>
                <a href="http://www.utfpr.edu.br/campus/campomourao">Clique aqui para conhecer mais sobre nossa instituição</a>
            </p>
            <br />
            <hr />
            <br />

            <h2 className='text-2xl text-[#1F2A44] font-semibold mb-2'>Grupo desenvolvedor do site</h2>
            <div className='flex flex-col justify-center'>
                <img className='' src="/grupo.png" alt="" />    
                <p className='mt-3'>
                    Adriely, Hellen e Natalia são amigas inseparáveis desde o início do Curso Técnico, fortalecidas por
                    uma amizade sólida e uma parceria marcada pela harmonia e excelente comunicação. Motivadas por um
                    novo desafio proposto carinhosamente pela professora Sandra Aleixo, conhecida como Sandrinha, elas
                    decidiram desenvolver um site dedicado a Dom Casmurro. Cada uma contribui com talentos únicos
                    e complementares, tornando o projeto ainda mais especial.
                    <br />
                    Hellen, com sua paixão pela literatura, é fascinada pela obra de Machado de Assis. Seu olhar atento
                    e sua habilidade natural para análise crítica permitem que ela explore com profundidade os detalhes
                    da narrativa e dos personagens, garantindo um conteúdo rico e relevante.
                    <br />
                    Natalia, por outro lado, brilha no campo das artes. Seu talento para o design, combinado com sua
                    visão criativa, resulta em um layout que reflete a essência e o clima de Dom Casmurro,
                    tornando o site visualmente encantador e envolvente.
                    <br />
                    Adriely, a líder nata do grupo, desempenha o papel de organizadora e motivadora. Com sua habilidade
                    em coordenar esforços e alinhar ideias, ela assegura que o projeto avance de forma estruturada e
                    produtiva, conduzindo o time com firmeza e inspiração.
                    <br />
                    Juntas, essas três amigas unem suas habilidades e conhecimentos para criar um site que vai além de
                    apresentar Dom Casmurro. Seu objetivo é cativar e inspirar os visitantes, proporcionando uma
                    experiência imersiva e significativa em torno dessa obra-prima da literatura brasileira.
                </p>
            </div>
        </div>
    );
};

export default UTFPRPage;
